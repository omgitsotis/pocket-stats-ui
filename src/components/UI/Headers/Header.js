import React from 'react';
import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const StyledHeader = styled(Typography)({
    marginBottom: 24
});

const header = ({ title, variant, component }) => (
    <StyledHeader variant={variant} component={component}>{title}</StyledHeader>
);

export default header;
