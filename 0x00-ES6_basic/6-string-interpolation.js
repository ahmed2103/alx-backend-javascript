export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
        income: '$119,868',
        gdp: '$154.2 billion',
        capita: '$178,479',
    };

    return `As of ${year}, San Francisco's income was ${budget.income}, GDP was ${budget.gdp}, and per capita was ${budget.capita}.`;
}
