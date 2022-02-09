const CardBoard = (props) => {

    const { cardData } = props

    return (
        cardData.map((card, key) => {
            <img
            key={key}
            src={chooseImage(key)}
            data-id={key}
            onClick={(event) => {
                let cardId = event.target.getAttribute('data-id')

                if(!checkAlreadyWonCard(cardId)) {
                    handleFlipCard(cardId)
                }
            }}
            />
        })

    )
}