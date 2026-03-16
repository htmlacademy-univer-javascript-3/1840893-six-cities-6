import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import styles from './not-found.module.css';
import { Helmet } from 'react-helmet-async';

export default function NotFound(): JSX.Element {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Страница не найдена</p>
      <Link to={AppRoutes.Root} className={styles.link}>
        Перейти на главную страницу
      </Link>
    </div>
  );
}
