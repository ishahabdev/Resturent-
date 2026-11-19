import { memo } from 'react';

function Loader() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', color: 'var(--accent)' }}>
      Loading…
    </div>
  );
}

export default memo(Loader);
