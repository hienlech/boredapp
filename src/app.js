import React, { Fragment, useContext, useState, useRef } from 'react'
import { BoredContext } from './BoredContext'
import Chat from './components/Chat'
import { Button } from './components/Button'
import Reward from 'react-rewards'
import Loading from './components/Loading'
import Welcome from './components/Welcome'
import {
  Card,
  ChatContainer,
  Mobile,
  MobileBg,
  SrOnly
} from './components/Elements'
import mobileBg from './images/mobile-bg.svg'
import { format } from 'date-fns'

export default () => {
  let reward
  const mobilePhone = useRef(null)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getRandom } = useContext(BoredContext)
  const newTime = () => ({ time: format(new Date(), 'HH:mm') })
  const defaultMessages = [
    {
      user: 'Tôi đang chán . Tôi nên làm gì bây giờ ?',
      bot: getRandom().activity,
      ...newTime()
    }
  ]
  const [messages, setMessages] = useState(defaultMessages)

  const no = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setMessages([
        ...messages,
        {
          user: 'Không 👎',
          bot: getRandom().activity,
          ...newTime()
        }
      ])
      mobilePhone.current.scrollTop = mobilePhone.current.scrollHeight
    }, 400)
  }

  const yes = () => {
    reward.rewardMe()
    setMessages([
      ...messages,
      {
        user: 'Có 👍',
        bot: 'Làm đi thôi 🎉',
        ...newTime()
      }
    ])
    setDone(true)
    setTimeout(() => {
      mobilePhone.current.scrollTop = mobilePhone.current.scrollHeight
    }, 0)
  }

  const confetti = () => reward.rewardMe()

  const restart = () => {
    setMessages(defaultMessages)
    setDone(false)
  }

  return (
    <Fragment>
      <Card>
        <Welcome />
        <ChatContainer>
          <SrOnly as="h2">Chat</SrOnly>
          <MobileBg alt="background" src={mobileBg} />
          <Mobile ref={mobilePhone}>
            <Chat messages={messages}>
              <Reward
                type="confetti"
                ref={ref => {
                  reward = ref
                }}
              >
                <Button onClick={() => (done ? confetti() : yes())}>
                  {done ? (
                    'Hay'
                  ) : (
                    <span role="img" aria-label="Yes.">
                      Có 👍
                    </span>
                  )}
                </Button>
              </Reward>
              {!done ? (
                <Button onClick={() => no()}>
                  <span role="img" aria-label="No.">
                    Không 👎
                  </span>
                </Button>
              ) : (
                <Button onClick={() => restart()}>Bắt đầu lại</Button>
              )}
              {loading ? <Loading /> : null}
            </Chat>
          </Mobile>
        </ChatContainer>
      </Card>
    </Fragment>
  )
}
