import Link from 'next/link'
import styles from './MainLayout.module.scss'
import { useRouter } from "next/router";

export const MainLayout = ({ children, headerTitle }) => {
    const router = useRouter()
    const { pathname } = router
    return (
        <div>
            <nav className={styles.layoutNav}>
                <Link href={'/movies'}><a className={styles.layoutNav__link}>Movies</a></Link>
                <Link href={'/persons'}><a className={styles.layoutNav__link}>Persons</a></Link>
            </nav>
            <main className={styles.layoutMainBlock}>
                <div className={styles.layoutMainBlock__header}>
                    {headerTitle && <h1 className={styles.layoutMainBlock__header__title}>{headerTitle}</h1>}
                </div>

                <div className={styles.layoutMainBlock__container}>
                    {pathname !== '/' &&
                    <Link
                        href={'/'}

                    ><a  className={styles.layoutMainBlock__container__link}> GO TO START PAGE</a></Link>
                    }
                    {children}
                </div>
            </main>
        </div>
    );
};

