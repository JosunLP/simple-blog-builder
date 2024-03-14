import { Config } from "./config/Config.js";
import Info from "./models/info.js";
import { ConfigObject } from "./types/ConfigObject.type";

/**
 * Simple blog builder
 *
 * @class SimpleBlogBuilder
 * @description The core class for building a simple blog. It is used to create a simple blog object, wich will be used in the framework components.
 *
 * @example
 */
export default class SimpleBlogBuilder {

	public constructor(config: ConfigObject) {
		const configSrvs = Config.getInstance();
		configSrvs.setConfig(config);
	}

	public getVersion(): string {
		return new Info().getInfo().VERSION;
	}

	public getLibraryInfo(): Info {
		return new Info();
	}
}
