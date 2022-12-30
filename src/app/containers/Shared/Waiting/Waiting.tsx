import React, { memo, useEffect, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';

/**
 * Waiting
 *   Page to show when authenticated user is loading
 * @param {any}  props Properties
 * @return {React.Component} Waiting Component
 */
export const Waiting = memo(() => {
  Waiting.displayName = 'Waiting';
  // const { t } = useTranslation()
  // const to = useMemo(() => props.to, [props.to])

  const [progress, setProgress] = useState(0);
  // const [buffer, setBuffer] = useState(10);
  const [, setBuffer] = useState(10);

  const progressRef = useRef(() => ({}) as any);
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<React.Fragment>Waiting</React.Fragment>);
})

export default Waiting;
