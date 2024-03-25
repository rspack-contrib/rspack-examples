/** @type {import('next').NextConfig} */
import { RsdoctorWebpackPlugin } from '@rsdoctor/webpack-plugin';

const nextConfig = {
  webpack: (config) => {
    if (process.env.RSDOCTOR === 'true') {
      config.plugins.push(
        new RsdoctorWebpackPlugin({
          disableClientServer: true,
        })
      )
    }
    return config
  },
};
export default nextConfig;
