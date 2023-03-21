import styles from './styles.module.css';

interface CardProps {
    title: string;
    description: {title: string, description: string}[];
}

const Card = ({title, description}: CardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {description.map((item: {title: string, description: string}, index: number) => (
                    <li key={index} className={styles.item}><h3 className={styles.subtitle}>{item.title}</h3><p>{item.description}</p></li>
                ))}
            </ul>
        </div>
    )
}

export default Card