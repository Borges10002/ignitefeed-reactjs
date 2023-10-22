import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Commnent() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/32522338?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Deigo da Silva Borges</strong>

              <time
                title="30 de Setembro ás 07:25h"
                dateTime="202-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentários">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 🎉🌹</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
