$startDate = Get-Date "2025-08-01 11:00:00"
$endDate   = Get-Date "2025-09-30 19:00:00"

$currentDate = $startDate

while ($currentDate -le $endDate) {

    # 30% chance: no commit that day (real life)
    $skipDay = Get-Random -Minimum 1 -Maximum 101
    if ($skipDay -le 30) {
        $currentDate = $currentDate.AddDays(1)
        continue
    }

    # 1 to 4 commits on working days
    $commitsPerDay = Get-Random -Minimum 1 -Maximum 5

    for ($i = 1; $i -le $commitsPerDay; $i++) {

        Add-Content src\dummy.js "// work update $i on $($currentDate.ToString('yyyy-MM-dd'))"

        git add .

        $commitTime = $currentDate.AddHours($i)

        $env:GIT_AUTHOR_DATE    = $commitTime.ToString("yyyy-MM-dd HH:mm:ss")
        $env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE

        git commit -m "Improve portfolio section"
    }

    $currentDate = $currentDate.AddDays(1)
}
