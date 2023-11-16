import React from 'react'

type Props = {
    params: {
        id: string;
    };
};

const IssueEditPage = ({params}: Props) => {
  return (
    <div>IssueEditPage for issue # {params.id}</div>
  )
}

export default IssueEditPage