import React from 'react';
import styles from './listStandard.module.css';
const listStandard: React.FC = () => {
  return (
    <section id={styles.listStandard}>
      <div className={styles.divPadding}>
        <div className={styles.divSearch}>
          <input className={styles.tbx} type="text" placeholder="Standard code" />
          <input className={styles.tbx} type="text" placeholder="Standard name" />
          <button className={`${styles.btn} ${styles.btnSearch}`}>Search</button>
        </div>
        <div className={styles.divPadding}>
          <div className={styles.divFlexBetween}>
            <div>
              <button className={`${styles.btn} ${styles.btnCreate}`}>Create</button>
            </div>
            <div className={styles.divFlexBetween}>
              <div className={styles.record}>
                <span>1-20/30 record</span>
              </div>
              <div className={styles.pagination}>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.divTable}>
            <h3>Standard list</h3>
            <table className={styles.table}>
              <tr>
                <th>Id</th>
                <th>Standard code</th>
                <th>Standard name</th>
                <th>EC label</th>
              </tr>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>0001</td>
                  <td>サイズ（XS/S/M/L）</td>
                  <td>カラー1</td>
                  <td>Detail </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0002</td>
                  <td>サイズ（XS/S/M/L）</td>
                  <td>カラー1</td>
                  <td>Detail </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>0003</td>
                  <td>サイズ（XS/S/M/L）</td>
                  <td>カラー1</td>
                  <td>Detail </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default listStandard;
