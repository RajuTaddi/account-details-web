import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { getAccounts } from '../../api/accounts-api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedDate } from '../shared/date';
import { Error } from '../screens/error';

const StyledWrapper = styled.div``;
const StyledThead = styled.thead`
  background-color: #c8f2fa;
`;

const AccountsDashboard: React.FC<{}> = () => {
  const [accounts, setAccounts] = useState(null);
  const [apiCallStatus, setApiCallStatus] = useState(true);

  useEffect(() => {
    getAccounts()
      .then(data => {
        setApiCallStatus(true);
        setAccounts(data);
      })
      .catch(error => {
        setApiCallStatus(false);
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container fluid>
        <StyledWrapper>
          <h1>Accounts</h1>
          <Table striped>
            <StyledThead>
              <tr>
                <th>Account Number</th>
                <th>Account Name</th>
                <th>Account Type</th>
                <th>Balance Date</th>
                <th>Currency</th>
                <th>Opening Available Balance</th>
              </tr>
            </StyledThead>
            {!apiCallStatus && <Error />}
            <tbody>
              {accounts &&
                accounts.length > 0 &&
                accounts.map(acc => (
                  <tr key={acc.accountNumber}>
                    <td>
                      <Link to={`/accountdetail/${acc.accountNumber}`}>
                        {acc.accountNumber}
                      </Link>
                    </td>
                    <td>{acc.accountName}</td>
                    <td>{acc.accountType}</td>
                    <td>
                      <FormattedDate date={acc.date} format={'DD/MM/YYYY'} />
                    </td>
                    <td>{acc.currency}</td>
                    <td>{acc.amount}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default AccountsDashboard;
