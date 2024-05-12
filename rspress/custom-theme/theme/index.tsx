import Theme from 'rspress/theme';
import { usePageData } from 'rspress/runtime';

// to replace home footer
export function HomeFooter() {
  const { siteData } = usePageData();
  const { createdBy } = (siteData.themeConfig.footer || {}) as any;
  // use configuration from rspress.config

  return (
    <footer className="absolute bottom-0 mt-12 py-8 px-6 sm:p-8 w-full border-t border-solid border-divider-light">
      <div className="m-auto w-full text-center">
        <div className="font-meduim text-sm text-text-2">Created by {createdBy} with love</div>
      </div>
    </footer>
  );
}

export default Theme;
export * from 'rspress/theme';
