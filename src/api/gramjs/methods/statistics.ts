import BigInt from 'big-integer';
import { Api as GramJs } from '../../../lib/gramjs';

import {
  ApiChat, ApiChannelStatistics, ApiGroupStatistics, ApiMessageStatistics, StatisticsGraph,
} from '../../types';

import { invokeRequest } from './client';
import { buildInputEntity } from '../gramjsBuilders';
import {
  buildChannelStatistics, buildGroupStatistics, buildMessageStatistics, buildGraph,
} from '../apiBuilders/statistics';

export async function fetchChannelStatistics({
  chat,
}: { chat: ApiChat }): Promise<ApiChannelStatistics | undefined> {
  const result = await invokeRequest(new GramJs.stats.GetBroadcastStats({
    channel: buildInputEntity(chat.id, chat.accessHash) as GramJs.InputChannel,
  }), undefined, undefined, undefined, chat.fullInfo!.statisticsDcId);

  if (!result) {
    return undefined;
  }

  return buildChannelStatistics(result);
}

export async function fetchGroupStatistics({
  chat,
}: { chat: ApiChat }): Promise<ApiGroupStatistics | undefined> {
  const result = await invokeRequest(new GramJs.stats.GetMegagroupStats({
    channel: buildInputEntity(chat.id, chat.accessHash) as GramJs.InputChannel,
  }), undefined, undefined, undefined, chat.fullInfo!.statisticsDcId);

  if (!result) {
    return undefined;
  }

  return buildGroupStatistics(result);
}

export async function fetchMessageStatistics({
  chat,
  messageId,
}: {
  chat: ApiChat;
  messageId: number;
}): Promise<ApiMessageStatistics | undefined> {
  const result = await invokeRequest(new GramJs.stats.GetMessageStats({
    channel: buildInputEntity(chat.id, chat.accessHash) as GramJs.InputChannel,
    msgId: messageId,
  }), undefined, undefined, undefined, chat.fullInfo!.statisticsDcId);

  if (!result) {
    return undefined;
  }

  return buildMessageStatistics(result);
}

export async function fetchStatisticsAsyncGraph({
  token,
  x,
  isPercentage,
  dcId,
}: {
  token: string;
  x?: number;
  isPercentage?: boolean;
  dcId?: number;
}): Promise<StatisticsGraph | undefined> {
  const result = await invokeRequest(new GramJs.stats.LoadAsyncGraph({
    token,
    ...(x && { x: BigInt(x) }),
  }), undefined, undefined, undefined, dcId);

  if (!result) {
    return undefined;
  }

  return buildGraph(result as GramJs.StatsGraph, isPercentage);
}
