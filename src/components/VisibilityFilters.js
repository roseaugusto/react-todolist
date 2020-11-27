import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {
                Object.keys(VISIBILITY_FILTERS).map(filterkey =>{
                    const currentFilter = VISIBILITY_FILTERS[filterkey];
                        return (
                            <span
                                key={`visibility-filter-${currentFilter}`}
                                className={cx(
                                    "filter",
                                    currentFilter === activeFilter && "filter--active"
                                )}
                                onClick={() => setFilter(currentFilter)}
                            >
                                { currentFilter }
                            </span>
                        )
                    })
            }
        </div>
    );
}

const mapsToStateProps = state => {
    return { activeFilter: state.visibilityFilter }
}

export default connect (
    mapsToStateProps,
    { setFilter }
) (VisibilityFilters);