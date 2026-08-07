{
  description = "Page source of myuu.dev";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      treefmt-nix,
      git-hooks,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };

        treefmtEval = treefmt-nix.lib.evalModule pkgs {
          projectRootFile = "flake.nix";
          programs.nixfmt.enable = true;
          programs.prettier = {
            enable = true;
            settings = {
              arrowParens = "avoid";
              endOfLine = "lf";
              semi = false;
              singleQuote = true;
              trailingComma = "all";
            };
            excludes = [ "src/pnpm-lock.yaml" ];
          };
        };

        formatter = treefmtEval.config.build.wrapper;

        preCommitCheck = git-hooks.lib.${system}.run {
          src = ./.;
          hooks.treefmt = {
            enable = true;
            name = "treefmt";
            entry = "${formatter}/bin/treefmt";
            pass_filenames = true;
          };
        };
      in
      {
        inherit formatter;

        devShells = {
          default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs_22
              pnpm
            ];
            shellHook = ''
              ${preCommitCheck.shellHook}
            '';
          };
        };

        checks = {
          formatting = treefmtEval.config.build.check self;
          pre-commit = preCommitCheck;
        };
      }
    );
}
