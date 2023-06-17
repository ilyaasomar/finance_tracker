import React from 'react'

import DemoLayout from 'components/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'CalendarViewDoc/'

const demoHeader = {
    title: 'CalendarView',
    desc: 'CalenderView component is a wrapper of <a class="text-indigo-600 underline" href="https://fullcalendar.io/docs/react" target="_blank">FullCalendar</a>.',
}

const demos = [
    {
        mdName: 'Example',
        mdPath: mdPath,
        title: 'Example',
        desc: `Basically you can apply all the props that <a class="text-indigo-600 underline" href="https://fullcalendar.io/docs#toc" target="_blank">FullCalendar</a> provides. You can add <code>eventColor</code> property to <code>event</code> meta to define the event color.`,
        component: <Example />,
    },
]

const demoApi = [
    {
        component: 'CalendarView',
        api: [
            {
                propName: 'wrapperClass',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Extra class add to the wrapper',
            },
        ],
    },
    {
        component: 'Extra properties for event prop',
        api: [
            {
                propName: 'eventColor',
                type: `<code>'red'</code> | <code>'orange'</code> | <code>'amber'</code> | <code>'yellow'</code> | <code>'lime'</code> | <code>'green'</code> | <code>'emerald'</code> | <code>'teal'</code> | <code>'cyan'</code> | <code>''</code> | <code>'sky'</code> | <code>''</code> | <code>'blue'</code> | <code>'indigo'</code> | <code>'purple'</code> | <code>'fuchsia'</code> | <code>'pink'</code> | <code>'rose'</code>`,
                default: `-`,
                desc: 'Define the event color',
            },
        ],
    },
]

const reactFullCalendarApi = (
    <div className="demo-api-table mb-12">
        <h4 className="mb-5">Dependencies</h4>
        <h6 id="react-syntax-highlighter-api" className="mb-3">
            Fullcalendar
        </h6>
        <p>
            All fullcalendar props can be applied on this component, refer{' '}
            <a
                className="underline text-indigo-600"
                href="https://fullcalendar.io/docs/react#props"
                target="_blank"
                rel="noreferrer"
            >
                official docs
            </a>{' '}
            for the complete api list.{' '}
        </p>
    </div>
)

const CalendarViewDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="docs/SharedComponentsDoc/components"
            extra={reactFullCalendarApi}
        />
    )
}

export default CalendarViewDoc
