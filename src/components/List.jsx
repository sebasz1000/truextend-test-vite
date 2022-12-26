

export const List = ({ team, players }) => {
    return (
        <>
            <header>{team.toUpperCase()}</header>
            <ul>
                {
                    players.map(({ name, lastName }) =>
                        <li key={name}>{`${name} ${lastName}`}</li>)
                }
            </ul>
        </>
    )
}
