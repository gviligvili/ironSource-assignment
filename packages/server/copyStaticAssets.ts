import * as shell from "shelljs";

shell.cp("src/config/localconfig.json", "dist/config/");
shell.cp("src/model/application/applications.json", "dist/model/application/");
