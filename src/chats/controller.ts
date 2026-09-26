const param = (key: string) => `:${key}`;
const fill = (tpl: string, params: Record<string, string | number>) =>
    Object.entries(params).reduce(
        (acc, [k, v]) => acc.replaceAll(param(k), encodeURIComponent(String(v))),
        tpl,
    );

const CHAT_ID = param("chatId");
const USER_ID = param("userId");
const CHAT_NAME = param("chatName");

export const CHATS_CONTROLLER = {
    NAME: "chats",
    CREATE: { PATTERN: "", PATH: () => "" },
    MANY: { PATTERN: "", PATH: () => "" },
    BY_ID: {
        PATTERN: CHAT_ID,
        PATH: (chatId: number) => fill(CHAT_ID, { chatId }),
    },
    BY_NAME: {
        PATTERN: `/by-name/${CHAT_NAME}`,
        PATH: (name: string) => fill(`/by-name/${CHAT_NAME}`, { chatName: name }),
    },
    UPDATE: {
        PATTERN: CHAT_ID,
        PATH: (chatId: number) => fill(CHAT_ID, { chatId }),
    },
    DELETE: {
        PATTERN: CHAT_ID,
        PATH: (chatId: number) => fill(CHAT_ID, { chatId }),
    },
    ADD_MEMBER: {
        PATTERN: `/add-member/${CHAT_ID}/${USER_ID}`,
        PATH: (chatId: number, userId: number) =>
            fill(`/add-member/${CHAT_ID}/${USER_ID}`, { chatId, userId }),
    },
    REMOVE_MEMBER: {
        PATTERN: `/remove-member/${CHAT_ID}/${USER_ID}`,
        PATH: (chatId: number, userId: number) =>
            fill(`/remove-member/${CHAT_ID}/${USER_ID}`, { chatId, userId }),
    },
    LEAVE: {
        PATTERN: `${CHAT_ID}/leave`,
        PATH: (chatId: number) => fill(`${CHAT_ID}/leave`, { chatId }),
    },
} as const;