# Foundation

What is Foundation?

## The Story
Foundation is a tool primarily meant to automate a lot of the research that I have to do when trading stocks on the NYSE.

Normally, if I am getting into a trade with very little prepartion I am typically looking at the market gainers.  I like to see if:
1. A stock has solid technical fundamentals: Not overbought based off of the (RSI), in an upward trend based off of the MACD, as well as the current price in retrospect to the 20 Day Moving Average (MA) and 200 Day Moving Average (MA).
2. There is some catalyst that is driving volume.  This could be a drug that was recently released in the biotech industry, or a contract earner, or even positive earnings.

Those are my two requirements, especially if I am to get into a trade long.

Now doing this is time consuming because you as a trader have to pull up the ticker on your research platform of choice, you have to enter in your indicators, you also have to see what the market wants.

If it's a bad company but they have some catalyst striking their stock up, you really have to ask yourself whether or not this move can lead a long-term upward trend in the company.

Now for mid to large cap companies things are a bit different.  I want to know immediately when a good, profitable company is oversold.  

I also want to know when their stock is getting ready to break into stage one so that I can add a small position, as well as stage two to add more to this position.

How I plan to do so is analyzing the stocks daily to get an idea of whether or not current companies on my watchlist are in a good position to buy.  One thing to note, is you can't really treat today as a part of the MA because today is technically tomorrow to my understanding, so part of this work is updating the database for a given stock with a delayed price and the moment a good setup is in play, sending out a trigger with Azure Event Grid. 

Quite a bit of backend work to get all of this running smoothly, but this repository will be user facing.  My plan is to one allow for a smoother UX analyzing a stock, but also add in visualizations for event triggers.

Essentially plotting on a line graph or candlestick chart what price the indication was at, as well as what time.  Server side wise, there is more work that goes into play, such as sending out a notification with for SMS Devices and Smart Devices.

That's pretty much it.  Without giving too much away, most of this repository will probably be open source - for now.  Eventually, I will make this private because there are a few dozen traders that want to use this software and I plan to monetize it.

## Expected Challenges

1. I have absolutely no development experience working with financial charts, yet along building a library from scratch.  Why from scratch?  Because there is a specific tailored experience that I am aiming for which I cannot get with out of the box experiences.

I could certainly go out of box to start, but it's not necessary seeing as right now a lot of the alerts can be triggered with Azure and sent to my phone.  I'm hoping for a December 2021/January 2022 full completion of this project and that's more than enough time to create what I want using either D3.js or a similar data visualization library.

Other than the charting library being a pain, I don't see much of a hurdle with this project.  A lot of moving parts, but thankfully with modern frontend development tools in our ecosystem today, it's very easy to scale this codebase.

One particular library that I am a fan of is [Trading Vue](https://github.com/tvjsx/trading-vue-js/tree/master/src) I'm looking to build something like this from scratch in React and I'll likely use D3 or Apex Charts or from scratch completely using canvas.


## Frontend Roadmap

**September 2021**
- Project Setup (Done)
- **Financial Charting Library SPIKE Work (In Progress)**
- Begin building out Charting Library

**October 2021**
- Charting library complete, with support for both real-time and non real-time markets.

**Late October 2021**
- Journaling: Much inspired by [TraderSync](https://tradersync.com/) in order to monitor trading patterns.  I'm not a total fan of trader sync, the same way I don't really like [StocksToTrade](https://stockstotrade.com/) and have stopped using both. 

**November 2021**
- Begin building out views that consume market data and display in real-time using [mock server](https://github.com/DoctaCloak/foundation-client/blob/release/webpack/mock-router.js) and [mock service](https://github.com/DoctaCloak/foundation-client/tree/release/mock-services/financial) data.

- SPIKE work for integrating TensorFlow.js to do short-term price trend prediction.  This may have to be done server side and relayed in real time through a websocket connection but I want to see if it's not a hurdle to do this client-side.

## Long-Term Planned Devices:
1. iOS/Android via React Native
2. Samsung TV via React Native Tizen (This is for traders who happen to use smart tv's when they're working - I personally am one of them and again this is being developed with my UX in mind first and foremost)
    - I am not sure if the newer versions of React Native are supported out of the box for this one.  I may have to build a bridge so I'll factor in the time in a future weekend SPIKE after most of the functionality has been built. 
