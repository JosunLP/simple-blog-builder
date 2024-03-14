import { ConfigObject } from "../types/ConfigObject.type";

/**
 * Config
 * @description The core class for the configuration of the simple blog
 */
export class Config {
	private static instance: Config;

	private readonly data: ConfigObject = {
		blogTitle: "Simple Blog",
		blogSubtitle: "A simple blog",
	};

	private constructor() {}

	/**
	 * Get instance
	 * @returns instance
	 * @description Gets the instance of the Config class
	 */
	public static getInstance(): Config {
		if (!Config.instance) {
			Config.instance = new Config();
		}
		return Config.instance;
	}

	/**
	 * Set config
	 * @param config
	 * @description Sets the config object
	 */
	public setConfig(config: ConfigObject): void {
		this.data.blogTitle = config.blogTitle;
		if (config.blogSubtitle) {
			this.data.blogSubtitle = config.blogSubtitle;
		}
	}

	/**
	 * Get config
	 * @returns config
	 * @description Gets the config object
	 */
	public getConfig(): ConfigObject {
		return this.data;
	}
}
