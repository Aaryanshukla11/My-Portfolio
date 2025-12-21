$startDate = Get-Date "2024-08-01"
$endDate   = Get-Date "2024-09-30"

$currentDate = $startDate

while ($currentDate -le $endDate) {

    # 3–4 commits per day
    $commitsPerDay = Get-Random -Minimum 3 -Maximum 5

    for ($i = 1; $i -le $commitsPerDay; $i++) {

        if (!(Test-Path src)) {
            mkdir src
        }

        Add-Content src\dummy.js "// commit $i on $($currentDate.ToString('yyyy-MM-dd'))"

        git add .

        $env:GIT_AUTHOR_DATE    = $currentDate.AddMinutes($i).ToString("yyyy-MM-dd HH:mm:ss")
        $env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE

        git commit -m "Update portfolio progress ($($currentDate.ToString('yyyy-MM-dd')))"
    }

    $currentDate = $currentDate.AddDays(1)
}
