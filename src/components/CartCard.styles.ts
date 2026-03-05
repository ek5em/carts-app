import styled from '@emotion/styled';


export const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  display: grid;
  grid-template-columns: 48px 1fr 100px 140px auto;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
    border-color: #c7d2fe;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
`;

export const IdBadge = styled.div`
  width: 40px;
  height: 40px;
  background: #eef2ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #6366f1;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Value = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
`;

export const TotalValue = styled(Value)`
  color: #059669;
`;

export const ViewButton = styled.button`
  padding: 8px 18px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #4f46e5;
  }

  &:active {
    transform: scale(0.97);
  }
`;
