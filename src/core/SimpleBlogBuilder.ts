import { Blog } from "./controller/Blog.js";
import Info from "./models/info.js";
import { SBBCoreConfig } from "./types/ConfigObject.type";

/**
 * Simple blog builder
 *
 * @class SBBCore
 * @description The core class for building a simple blog. It is used to create a simple blog object, wich will be used in the framework components.
 *
 * @example
 */
export default class SBBCore {
	private constructor() {}

	/**
	 * Create a blog
	 *
	 * @param {SBBCoreConfig} configObj The configuration object
	 * @description Creates a blog with the configuration object
	 */
	public static createBlog(configObj: SBBCoreConfig): Blog {
		return new Blog(configObj);
	}

	/**
	 * Get the version of the framework
	 *
	 * @returns {string} The version of the framework
	 */
	public static getVersion(): string {
		return new Info().getInfo().VERSION;
	}

	/**
	 * Get the information of the framework
	 *
	 * @returns {Info} The information of the framework
	 */
	public static getLibraryInfo(): Info {
		return new Info();
	}
}
