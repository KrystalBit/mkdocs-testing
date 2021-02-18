import { useRouteData } from '@solidjs/router'
import { For, Suspense } from 'solid-js'
import Asset from '~/components/Asset'
import FormattedNumber from '~/components/FormattedNumber'
import FormattedTime from '~/components/FormattedTime'
import { CapitalGainsDataType } from './capitalGains.data'

export default function CapitalGains() {
  const data = useRouteData<CapitalGainsDataType>()

  return (
    <Suspense fallback="Loading...">
      <section class="bg-grey-200 dark:text-grey-200 flex place-content-center p-4">
        <article class="flex flex-col text-center">
          <FormattedNumber
            class="text-xl font-bold"
            value={data()?.capitalGainsTotal[0]?.total_gainloss}
            options={{
              style: 'currency',
              currency: 'EUR',
      