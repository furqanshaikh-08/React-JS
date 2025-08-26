import { createContext } from "react";

 const UserContext=createContext()
 const ChannelContext=createContext()

 const UserProvider=UserContext.Provider
 const UserConsumer=UserContext.Consumer

 const ChannelProvider=ChannelContext.Provider
 const ChannelConsumer=ChannelContext.Consumer

 export {UserConsumer,UserProvider,ChannelConsumer,ChannelProvider}