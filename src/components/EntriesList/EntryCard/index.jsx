import styles from './styles.module.scss'
import remove_icon from '../../../assets/remove_icon.png'

export const EntryCard = ({ entry, removeEntry }) => {
  return (<>
    <li className={styles.card}>
      <p>{entry.value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
      <div>
        <span>{entry.categoryId === 0 ? "Entrada" : "Saída"}</span>
        <button onClick={() => removeEntry(entry.id)}><img src={remove_icon} alt="🗑️" /></button>
      </div>
    </li>
  </>)
}