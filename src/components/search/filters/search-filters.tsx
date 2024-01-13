import ClearFilters from './clear-filters'
import RadioFilter from './radio-filter'
import RangeFilter from './range-filter'
import StringFilter from './string-filter'
import TagFilter from './tag-filter'

export default function SearchFilters() {
  return (
    <div className="grid gap-y-4">
      <div className="flex flex-wrap  items-baseline justify-between gap-x-6 ">
        <span className="">Filter your results</span>

        <ClearFilters />
      </div>
      <div className="grid gap-4">
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
            param="main_position_like"
            options={[
              {
                label: 'GK',
                value: 'Goalkeeper',
              },
              {
                label: 'CB',
                value: 'Centre-Back',
              },
              {
                label: 'RB',
                value: 'Right-Back',
              },
            ]}
          />
          <RadioFilter
            label="Midfielder"
            param="main_position_like"
            options={[
              {
                label: 'CM',
                value: 'Central Midfield',
              },
              {
                label: 'CAM',
                value: 'Attacking Midfield',
              },
              {
                label: 'DM',
                value: 'Defensive Midfield',
              },
              {
                label: 'RM',
                value: 'Right Midfield',
              },
              {
                label: 'LM',
                value: 'Left Midfield',
              },
            ]}
          />
          <RadioFilter
            label="Attacker"
            param="main_position_like"
            options={[
              {
                label: 'LW',
                value: 'Left Wing',
              },
              {
                label: 'RW',
                value: 'Right Winger',
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
