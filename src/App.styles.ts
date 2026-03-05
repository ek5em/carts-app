import styled from '@emotion/styled';


export const AppShell = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;
`;

export const TopBar = styled.header`
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

export const Logo = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #6366f1;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
