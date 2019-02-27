import React from 'React';
import styled from 'styled-components';

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContainerView = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const BorderView = styled.View`
  flex: 1;
  background-color: #eee;
  border-color: #999;
  border-width: 1px;
  border-style: solid;
  margin-bottom: ${props => props.margin ? '10px' : '0px'};
  padding: 5px;
`;

export const BottomView = styled.View`
  margin-bottom: 24px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.Button`
  flex: 1;
`;

export const InfoTitleText = styled.Text`
  font-weight: bold;
  font-size: ${props => props.bigger ? '20px' : '14px'};
  margin-bottom: ${props => props.bigger ? '10px' : '5px'};
`;

export const InfoBodyText = styled.Text`
  
`;
