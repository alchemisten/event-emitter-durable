import { Module } from '@nestjs/common';
import { EventEmitterModule } from '../../lib';
import { CustomEventDecoratorConsumer } from './custom-decorator-test.consumer';
import { EventsControllerConsumer } from './events-controller.consumer';
import { EventsProviderAliasedConsumer } from './events-provider-aliased.consumer';
import { EventsProviderPrependConsumer } from './events-provider-prepend.consumer';
import { EventsProviderConsumer } from './events-provider.consumer';
import { EventsProviderDurableRequestScopedConsumer } from './events-provider.durable-request-scoped.consumer';
import { EventsProviderRequestScopedConsumer } from './events-provider.request-scoped.consumer';
import { EventsProducer } from './events.producer';
import { TestProvider } from './test-provider';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
  ],
  controllers: [EventsControllerConsumer],
  providers: [
    EventsProviderConsumer,
    EventsProviderPrependConsumer,
    EventsProducer,
    TestProvider,
    EventsProviderRequestScopedConsumer,
    EventsProviderDurableRequestScopedConsumer,
    EventsProviderAliasedConsumer,
    {
      provide: 'AnAliasedConsumer',
      useExisting: EventsProviderAliasedConsumer,
    },
    CustomEventDecoratorConsumer,
  ],
})
export class AppModule {}
