import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Link from '@material-ui/core/Link';

function preventDefault(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
}

export default function Card(props: {
    title?: string;
    primaryText?: string;
    secondaryText?: string;
    buttonText?: string;
}) {
    return (
        <>
            {props.title ? <Title>{props.title}</Title> : null}
            {props.primaryText ? (
                <Typography component="p" variant="h4">
                    {props.primaryText}
                </Typography>
            ) : null}
            {props.secondaryText ? (
                <Typography color="textSecondary">{props.secondaryText}</Typography>
            ) : null}
            {props.buttonText ? (
                <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        {props.buttonText}
                    </Link>
                </div>
            ) : null}
        </>
    );
}
