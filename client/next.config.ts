import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["www.pompy-dev.uk"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/recipes",
        permanent: false,
      },
    ]
  },
}

class ConfigBuilder {
  config: NextConfig

  constructor(config: NextConfig) {
    this.config = config
  }

  apply(withPlugin: (nextConfig: NextConfig) => NextConfig): this {
    this.config = withPlugin(this.config)
    return this
  }

  get(): NextConfig {
    return this.config
  }
}

export default new ConfigBuilder(nextConfig).get()
