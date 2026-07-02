export type USER_JOINED_EMIT = {
  userId: string;
};
export type SDP_OFFER_EMIT={
    senderId:string;
    sdp:RTCSessionDescriptionInit
}
export type SDP_ANSWER_EMIT={
    senderId:string;
    sdp:RTCSessionDescriptionInit
}
export type ICE_CANDIDATE_EMIT={
    senderId:string;
    iceCandidate:RTCIceCandidate
}