import ClearFilters from './clear-filters'
import RadioFilter from './radio-filter'
import RangeFilter from './range-filter'
import StringFilter from './string-filter'
import TagFilter from './tag-filter'

export default function SearchFilters() {
  return (
    <div className="grid gap-y-4 ">
      <div className="flex flex-wrap  items-baseline justify-between gap-x-6 ">
        <span className="">Filter your results</span>

        <ClearFilters />
      </div>
      <div className="grid gap-8">
        <StringFilter label="Player name" param="name_like" />
        <StringFilter label="Club" param="club_like" />
        <RangeFilter label="Age" param="age" units="years" min={12} max={50} defaults={[20, 35]} />
        <TagFilter param="citizenship_like" />
        <RangeFilter
          label="Height"
          param="heighty"
          units="m"
          min={140}
          max={300}
          defaults={[170, 240]}
        />
        <RadioFilter
          label="Kicking Foot"
          param="position_like"
          options={[
            {
              label: 'Both',
              value: 'Both',
            },
            {
              label: 'Left',
              value: 'Left',
            },
            {
              label: 'Right',
              value: 'Right',
            },
          ]}
        />

        <RangeFilter
          label="Market value"
          param="market_value"
          units="m"
          min={0}
          max={800}
          defaults={[10, 300]}
        />
        <div className="grid gap-6">
          <span>Position(s)</span>
          <RadioFilter
            label="Defensive"
            param="position_like"
            options={[
              {
                label: 'GK',
                value: 'GoalKeeper',
              },
              {
                label: 'CB',
                value: 'Center Back',
              },
              {
                label: 'RB',
                value: 'Right Back',
              },
            ]}
          />
          <RadioFilter
            label="Midfielder"
            param="position_like"
            options={[
              {
                label: 'CM',
                value: 'Center Midfield',
              },
              {
                label: 'CAM',
                value: 'Central Attacking Midfielder',
              },
              {
                label: 'DM',
                value: 'Defensive Midfielder',
              },
              {
                label: 'RM',
                value: 'Right Midfielder',
              },
              {
                label: 'LM',
                value: 'Left Midfielder',
              },
            ]}
          />
          <RadioFilter
            label="Attacker"
            param="position_like"
            options={[
              {
                label: 'LW',
                value: 'Left Wing',
              },
              {
                label: 'RW',
                value: 'Right Wing',
              },
              {
                label: 'ST',
                value: 'Striker',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
