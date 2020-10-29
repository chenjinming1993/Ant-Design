import { Button } from 'antd';
import styles from './style.less';

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Button className={styles.register} type="text"><a href="/register">注册</a></Button>
          <Button className={styles.backHome} type="text"><a href="/">返回</a></Button>
        </div>
      </div>
      <div>Login</div>
    </div>
  );
}