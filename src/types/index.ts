interface Auth {
  sub: string;
  isReady: boolean;
  hasAccess: boolean;
}

type MainWindow = typeof window & {
  CONFIG: any;
};
