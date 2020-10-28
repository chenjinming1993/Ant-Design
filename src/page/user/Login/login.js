import { Button } from 'antd';
import styles from './style.less';

export default () => {
  return (
    <div>
      <div className={styles.header}>
        <Button className={styles.backHome} type="text"><a href="/">返回</a></Button>
      </div>
      <div>Login</div>
    </div>
  );
}