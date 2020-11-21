import { Publisher, UserCreatedEvent, Subjects } from "@rvticketing/common";

export class PaymentCreatedPublisher extends Publisher<UserCreatedEvent>{
    readonly subject = Subjects.UserCreated;
}