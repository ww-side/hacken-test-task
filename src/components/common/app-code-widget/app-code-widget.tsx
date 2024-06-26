import { useCallback, useState } from 'react';
import { Typography } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { appCode } from '@/data/app-code-widget.ts';
import st from './app-code-widget.module.scss';

export default function AppCodeWidget() {
  const [value, setValue] = useState(appCode);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <section className={st.sectionWrapper}>
      <Typography.Title level={3}>App source code</Typography.Title>
      <CodeMirror
        minHeight={'600px'}
        value={value}
        height="200px"
        extensions={[javascript({ jsx: true, typescript: true })]}
        onChange={onChange}
      />
    </section>
  );
}
