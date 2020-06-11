import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getAccountById } from '../../api/accounts-api';
import { Container, Table } from 'reactstrap';
import { FormattedDate } from '../shared/date';
import { Error } from '../screens/error';

const StyledWrapper = styled.div``;

const StyledThead = styled.thead`
  background-color: #c8f2fa;
`;

const LinkWrapper = styled.div`
  margin: 10px 0px;
`;

const StyledLink = styled(Link)`
  color: #3d5aff;
`;

interface AccountDetailProps extends RouteComponentProps {}

const AccountDetail: React.FC<AccountDetailProps> = props => {
  const [accountDetail, setAccountDetail] = useState(null);
  const [apiCallStatus, setApiCallStatus] = useState(true);

  useEffect(() => {
    // @ts-ignore
    getAccountById(props.match.params.accountnumber)
      .then(data => {
        setApiCallStatus(true);
        setAccountDetail(data);
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
          <LinkWrapper>
            <StyledLink to="/accounts">&#60; Back To Accounts</StyledLink>
          </LinkWrapper>
          <h1>Account Statement</h1>

          <Table striped>
            <StyledThead>
              <tr>
                <th>Account Number</th>
                <th>Account Name</th>
                <th>Value Date</th>
                <th>Currency</th>
                <th>Debit Amount</th>
                <th>Credit Amount</th>
                <th>Debit/Credit</th>
                <th>Transaction Narrative</th>
              </tr>
            </StyledThead>
            {!apiCallStatus && <Error />}
            <tbody>
              {accountDetail &&
                accountDetail.transactions &&
                accountDetail.transactions.length > 0 &&
                accountDetail.transactions.map((transaction, i) => (
                  <tr key={i}>
                    <td>{accountDetail.accountNumber}</td>
                    <td>{accountDetail.accountName}</td>
                    <td>
                      <FormattedDate
                        date={transaction.valueDate}
                        format={'DD/MM/YYYY'}
                      />
                    </td>
                    <td>{transaction.currency}</td>
                    <td>
                      {transaction.transactionType === 'Debit'
                        ? transaction.amount
                        : ''}
                    </td>
                    <td>
                      {transaction.transactionType === 'Credit'
                        ? transaction.amount
                        : ''}
                    </td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.description}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default AccountDetail;
