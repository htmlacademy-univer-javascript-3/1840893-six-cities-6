import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  count: number;
}

export default function App({count} : AppProps) {
  return <MainPage count = {count} />;
}
