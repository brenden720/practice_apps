import React from 'react';
import Player from './player';
import Dealer from './dealer';
import Deck from './deck';
import DealButton from './dealButton';
import Bankroll from './bankroll';
import HitButton from './hit';
import PlayerCardCount from './playerCardCount';
import DealerCardCount from './dealerCardCount';
import StayButton from './stay';
import BustedButton from './busted';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      player: [],
      dealer: [],
      playerCount: 0,
      playerCardValues: [],
      dealerCount: 0,
      dealerCardValues: [],
      isPlayerBusted: false,
      isDealerBusted: false,
      isBlackjack: false,
      gameComplete: false,
    };
    this.dealCards = this.dealCards.bind(this);
    this.playerHit = this.playerHit.bind(this);
    this.dealerHit = this.dealerHit.bind(this);
    this.getCardValue = this.getCardValue.bind(this);
    this.replay = this.replay.bind(this);
  }

  componentDidMount() {
    const deck = [];
    const suits = ['C', 'D', 'H', 'S'];
    const cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    suits.forEach(suit => {
      cardNames.forEach(card => {
        deck.push(card + suit);
      });
    });

    let currentIndex = deck.length;
    let temp;

    while (currentIndex !== 0) {
      currentIndex -= 1;
      const rand = Math.floor(Math.random() * deck.length);
      temp = deck[currentIndex];
      deck[currentIndex] = deck[rand];
      deck[rand] = temp;
    }

    this.setState({
      deck,
    });
  }

  dealCards() {
    const {deck, player, dealer, playerCardValues, dealerCardValues} = this.state;
    let {playerCount, dealerCount, isBlackjack} = this.state;
    if (!player.length && !dealer.length) {
      while (player.length < 2 && dealer.length < 2) {
        let playerCard = deck.pop();
        let dealerCard = deck.pop();
        let playerCardValue = this.getCardValue(playerCard);
        let dealerCardValue = this.getCardValue(dealerCard);
        if (typeof playerCardValue !== 'number') {
          playerCardValue = playerCardValue[1];
        }
        player.push(playerCard);
        playerCardValues.push(playerCardValue);
        playerCount += playerCardValue;

        if (typeof dealerCardValue !== 'number') {
          dealerCardValue = dealerCardValue[1];
        }

        dealer.push(dealerCard);
        dealerCardValues.push(dealerCardValue);
        dealerCount += dealerCardValue;

        if (playerCount === 21) {
          isBlackjack = true;
        }
      }
      this.setState({
        deck,
        player,
        dealer,
        playerCount,
        dealerCount,
        isBlackjack,
      });
    }
  }

  getCardValue(card) {
    let cardName = card.length > 2 ? card.slice(0, 2) : card[0];
    let faceCards = ['10', 'J', 'Q', 'K'];
    if (faceCards.includes(cardName)) {
      return 10;
    } else if (cardName === 'A') {
      return [1, 11];
    } else {
      return Number(cardName);
    }
  }

  replay() {
    const deck = this.generateDeck();
    this.setState({
      deck,
      player: [],
      dealer: [],
      playerCount: 0,
      playerCardValues: [],
      dealerCount: 0,
      dealerCardValues: [],
      isPlayerBusted: false,
      isBlackjack: false,
      gameComplete: false,
    });
  }

  generateDeck() {
    const deck = [];
    const suits = ['C', 'D', 'H', 'S'];
    const cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    suits.forEach(suit => {
      cardNames.forEach(card => {
        deck.push(card + suit);
      });
    });

    let currentIndex = deck.length;
    let temp;

    while (currentIndex !== 0) {
      currentIndex -= 1;
      const rand = Math.floor(Math.random() * deck.length);
      temp = deck[currentIndex];
      deck[currentIndex] = deck[rand];
      deck[rand] = temp;
    }
    return deck;
  }

  playerHit() {
    const { deck, player, playerCardValues, gameComplete} = this.state;
    let {playerCount, isPlayerBusted, isBlackjack} = this.state;

    if (isPlayerBusted || gameComplete) {
      return;
    }

    if (deck.length && player.length) {
      let playerCard = deck.pop();
      let playerCardValue = this.getCardValue(playerCard);
      let aceIndex = playerCardValues.indexOf(11);
      if (typeof playerCardValue !== 'number') {
        if (aceIndex !== -1) {
          if (playerCount + playerCardValue[1] > 21) {
            playerCardValue = playerCardValue[0];
          } 
        } else if (playerCount > 10) {
          playerCardValue = playerCardValue[0];
        } 
      } else if (playerCount + playerCardValue > 21) {
        if (aceIndex !== -1) {
          playerCardValues[aceIndex] = 1;
          playerCount -= 10;
        } 
      }
      player.push(playerCard);
      playerCardValues.push(playerCardValue);
      playerCount += playerCardValue;

      if (playerCount > 21) {
        isPlayerBusted = true;
        isBlackjack = false;
      } else if (playerCount === 21) {
        isBlackjack = true;
      }

      this.setState({
        deck,
        player,
        playerCount,
        playerCardValues,
        isPlayerBusted,
        isBlackjack,
      });
    }
  }

  dealerHit() {
    const {deck, dealer, dealerCardValues, gameComplete} = this.state;
    let {dealerCount, isDealerBusted, isBlackjack} = this.state;

    while (dealerCount < 17) {
      let dealerCard = deck.pop();
      console.log('this is dealer card: ' + dealerCard);
      let dealerCardValue = this.getCardValue(dealerCard);
      let aceIndex = dealerCardValues.indexOf(11);
      if (typeof dealerCardValue !== 'number') {
        if (aceIndex !== -1) {
          if (dealerCount + dealerCardValue[1] > 21) {
            dealerCardValue = dealerCardValue[0];
          }
        } else if (dealerCount > 10) {
          dealerCardValue = dealerCardValue[0];
        }
      } else if (dealerCount + dealerCardValue > 21) {
        if (aceIndex !== -1) {
          dealerCardValues[aceIndex] = 1;
          dealerCount -= 10;
        }
      }
      dealer.push(dealerCard);
      dealerCardValues.push(dealerCardValue);
      dealerCount += dealerCardValue;
  
      if (dealerCount > 21) {
        isDealerBusted = true;
        isBlackjack = false;
      } else if (dealerCount === 21) {
        isBlackjack = true;
      }

    }

    this.setState({
      deck,
      dealer,
      dealerCount,
      dealerCardValues,
      isDealerBusted,
      isBlackjack,
      gameComplete: true,
    });
  }

  render() {
    console.log('dealer: ' + this.state.dealer);
    console.log('player: ' + this.state.player);
    console.log('Player Busted?: ' + this.state.isPlayerBusted);
    console.log('Dealer Busted?: ' + this.state.isDealerBusted);
    const {player, dealer, playerCount, dealerCount, isPlayerBusted, isDealerBusted, gameComplete} = this.state;
    return (
      <div className="appContainer">
        <Player cards={player} playerHit={this.playerHit} />
        <Dealer cards={dealer} />
        <Deck />
        <DealButton dealCards={this.dealCards} />
        <HitButton playerHit={this.playerHit} />
        <StayButton dealerHit={this.dealerHit} />
        {isPlayerBusted && <BustedButton 
          replay={this.replay} 
          isPlayerBusted={isPlayerBusted} />
        }
        {isDealerBusted && <BustedButton
          replay={this.replay}
          isDealerBusted={isDealerBusted} />
        }
        {gameComplete && <BustedButton
          replay={this.replay}
          gameComplete={gameComplete} 
          playerCount={playerCount}
          dealerCount={dealerCount} />
        }
        <PlayerCardCount count={playerCount} />
        <DealerCardCount count={dealerCount} />
        <Bankroll />
      </div>
    );
  }
}

export default App;
