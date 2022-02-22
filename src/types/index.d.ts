type ModifyType<T, R> = Omit<T, keyof R> & R;

/**
 * @param errorMessage - Сообщение об ошибке
 * @param errorDetails - Доп.информация (не для пользователя)
 */
type ResponseError = {
    errorMessage?: string;
    errorDetails: Record<string, unknown>;
}
