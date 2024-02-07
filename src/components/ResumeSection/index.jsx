import styles from './styles.module.scss'

export const ResumeSection = ({ setType }) => {

  return (<>
    <section className={styles.resume}>
      <h2 className='title2'>Resumo Financeiro</h2>
        <div>
          <button onClick={() => setType(null)} className='text2'>Todos</button>
          <button onClick={() => setType(0)} className='text2'>Entradas</button>
          <button onClick={() => setType(1)} className='text2'>Saídas</button>
        </div>
    </section>
  </>)
}