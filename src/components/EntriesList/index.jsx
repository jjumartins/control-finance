import { EntryCard } from './EntryCard'
import styles from './styles.module.scss'

export const EntriesList = ({ entries, setEntries, type }) => {

  const filteredEntries = () => {
    return entries.filter(entry => type === null || type === entry.categoryId);
  }

  const calculateTotal = () => {
    return filteredEntries()
      .reduce((accumulator, entry) => entry.categoryId === 0 ? accumulator + entry.value : accumulator - entry.value, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  const removeEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.totalInfo}>
          <p>Soma dos valores</p>
          <p>{calculateTotal()}</p>
        </div>
        <ul>
          {filteredEntries().map(entry => (
            <EntryCard entry={entry} removeEntry={removeEntry} key={entry.id} />
          ))}
        </ul>
      </section>
    </>
  );
}
