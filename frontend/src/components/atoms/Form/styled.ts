import { Form } from 'formik'
import styled from 'styled-components'

export const FormWrapper = styled(Form)`
  width: 25%;
  margin: 0 auto;
  background: rgb(34, 33, 48);
  padding: 60px 35px;
  border-radius: 12px;
  @media (max-width: 568px) {
    width: 73%;
  }
  @media (max-width: 1440px) {
    width: 28%;
  }
  @media (max-width: 1366px) {
    width: 30%;
  }
  @media (max-width: 1280px) {
    width: 33%;
  }
  @media (max-width: 1080px) {
    width: 49%;
  }
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 991px) {
    width: 42%;
  }
  @media (max-width: 320px) {
    padding: 24px 28px;
    width: 73%;
  }
  @media (max-width: 414px) {
    padding: 34px 26px;
  }
  @media (max-width: 384px) {
    padding: 30px 26px;
  }
  @media (max-width: 375px) {
    padding: 24px 34px;
    width: 65%;
  }
  @media (max-width: 800px) {
    width: 51%;
  }
  @media (max-width: 768px) {
    width: 54%;
  }
  @media (max-width: 736px) {
    width: 56%;
  }
  @media (max-width: 667px) {
    width: 61%;
  }
  @media (max-width: 640px) {
    width: 64%;
  }
  @media (max-width: 600px) {
    width: 69%;
  }
  @media (max-width: 568px) {
    width: 73%;
  }
  span {
    font-size: 16px;
    color: #fff;
    float: left;
    margin-top: 20px;
    font-family: Roboto, sans-serif;
  }
`
