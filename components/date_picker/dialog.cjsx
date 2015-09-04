css       = require './style'
dateUtils = require '../date_utils'
Dialog    = require '../dialog'
Calendar  = require '../calendar'

module.exports = React.createClass
  displayName: 'CalendarDialog'

  # -- States & Properties
  propTypes:
    initialDate    : React.PropTypes.object
    onDateSelected : React.PropTypes.func

  getDefaultProps: ->
    initialDate    : new Date()

  getInitialState: ->
    date           : @props.initialDate
    display        : 'months'
    actions        : [
      { caption: "Cancel", type: "flat accent", onClick: @onDateCancel },
      { caption: "Ok",     type: "flat accent", onClick: @onDateSelected }
    ]

  # -- Events
  onCalendarChange: (calendar) ->
    @setState
      date: dateUtils.cloneDatetime(calendar.getValue())
      display: 'months'

  onDateCancel: (ref, method) ->
    @refs.dialog.hide()

  onDateSelected: ->
    @props.onDateSelected(@state.date) if @props.onDateSelected
    @refs.dialog.hide()

  # -- Public methods
  show: ->
    @refs.dialog.show()

  displayMonths: ->
    @setState display: 'months'

  displayYears: ->
    @setState display: 'years'

  # -- Render
  render: ->
    className = "display-#{@state.display}"
    <Dialog ref="dialog" type={css.dialog} className={className} actions={@state.actions}>
      <header className={css.header}>
        <span className={css.headerWeekday}>{dateUtils.weekDayInWords(@state.date.getDay())}</span>
        <div onClick={@displayMonths}>
          <span className={css.headerMonth}>{dateUtils.monthInShortWords(@state.date)}</span>
          <span className={css.headerDay}>{@state.date.getDate()}</span>
        </div>
        <span className={css.headerYear} onClick={@displayYears}>
          {@state.date.getFullYear()}
        </span>
      </header>

      <div className={css.calendarWrapper}>
        <Calendar
          ref="calendar"
          display={@state.display}
          onChange={@onCalendarChange}
          selectedDate={@state.date} />
      </div>
    </Dialog>